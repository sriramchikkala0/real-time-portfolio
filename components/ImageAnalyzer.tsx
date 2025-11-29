import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Sparkles, AlertCircle } from 'lucide-react';
import { analyzeImageWithGemini } from '../services/geminiService';

const ImageAnalyzer: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('');
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please upload a valid image file.');
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        // Strip the data URL prefix to get just the base64 string for the API
        const base64Data = result.split(',')[1];
        setImage(base64Data);
        setMimeType(file.type);
        setAnalysis('');
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image || !mimeType) return;

    setLoading(true);
    setAnalysis('');
    setError(null);

    try {
      const result = await analyzeImageWithGemini(
        image, 
        mimeType, 
        "Analyze this image in detail. Identify objects, text, and overall context. If it's a diagram or chart, explain the data."
      );
      setAnalysis(result);
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-violet-50 to-indigo-50">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="text-violet-600" />
          <h3 className="text-xl font-bold text-slate-800">AI Image Analysis Demo</h3>
        </div>
        <p className="text-slate-600 text-sm">
          Upload an image to test my integration with Gemini 1.5 Pro Vision.
        </p>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Upload Section */}
          <div className="flex-1">
            <label className="block w-full h-64 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-violet-500 hover:bg-violet-50 transition-all flex flex-col items-center justify-center relative overflow-hidden group">
              {image ? (
                <img 
                  src={`data:${mimeType};base64,${image}`} 
                  alt="Preview" 
                  className="w-full h-full object-contain p-2" 
                />
              ) : (
                <div className="text-center p-6">
                  <Upload className="mx-auto h-12 w-12 text-slate-400 group-hover:text-violet-500 mb-3 transition-colors" />
                  <p className="text-sm font-medium text-slate-700">Click to upload an image</p>
                  <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 5MB</p>
                </div>
              )}
              <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            </label>

            {error && (
              <div className="mt-3 flex items-center gap-2 text-red-600 text-sm bg-red-50 p-2 rounded">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <button
              onClick={handleAnalyze}
              disabled={!image || loading}
              className={`mt-4 w-full py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                !image || loading
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-violet-600 text-white hover:bg-violet-700 shadow-md hover:shadow-lg'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Analyze Image
                </>
              )}
            </button>
          </div>

          {/* Result Section */}
          <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-200 min-h-[250px]">
            <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
              <ImageIcon size={18} />
              Analysis Result
            </h4>
            {analysis ? (
              <div className="prose prose-sm text-slate-700 max-h-[300px] overflow-y-auto custom-scrollbar">
                <p className="whitespace-pre-line leading-relaxed">{analysis}</p>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400 text-sm italic">
                Result will appear here...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAnalyzer;
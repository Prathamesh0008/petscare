'use client';

interface ProgressBarProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export default function ProgressBar({ steps, currentStep, className = '' }: ProgressBarProps) {
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className={`w-full ${className}`}>
      {/* Progress Line */}
      <div className="relative mb-8">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
        <div 
          className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
        
        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-2 ${
                  index <= currentStep 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index + 1}
              </div>
              <div className={`text-sm text-center max-w-[100px] ${
                index <= currentStep ? 'font-medium' : 'text-gray-500'
              }`}>
                {step}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Step Info */}
      <div className="text-center mb-4">
        <div className="text-sm text-gray-600">Step {currentStep + 1} of {steps.length}</div>
        <h3 className="text-lg font-bold">{steps[currentStep]}</h3>
      </div>

      {/* Progress Text */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>Start</span>
        <span>{Math.round(progressPercentage)}% Complete</span>
        <span>Finish</span>
      </div>
    </div>
  );
}
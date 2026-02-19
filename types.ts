
export interface PasswordAnalysis {
  score: number; // 0-4
  crackTime: string;
  entropy: string;
  detailedCrackTimes: {
    onlineThrottled: string;
    onlineNoThrottling: string;
    offlineSlow: string;
    offlineFast: string;
  };
  feedback: {
    warning: string;
    suggestions: string[];
  };
  metrics: {
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumber: boolean;
    hasSpecial: boolean;
    length: number;
  };
}

export interface SecurityAdvice {
  summary: string;
  threats: string[];
  recommendations: string[];
}

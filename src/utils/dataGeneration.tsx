import { ArousalStatus, EEGData } from "../types/types";

export const generateSimulatedEEGData = (intensity: number): EEGData & { arousalStatus: ArousalStatus } => {
  let arousalStatus: ArousalStatus;
  let alpha: number, beta: number, theta: number, delta: number;

  // Determine arousal status based on intensity
  if (intensity <= 2) {
    arousalStatus = 'low';
  } else if (intensity <= 7) {
    arousalStatus = 'good';
  } else {
    arousalStatus = 'high';
  }

  // Add some randomness to make transitions smoother
  const random = Math.random();
  if (arousalStatus === 'low' && random < 0.2) arousalStatus = 'good';
  if (arousalStatus === 'high' && random < 0.2) arousalStatus = 'good';
  if (arousalStatus === 'good') {
    if (random < 0.1) arousalStatus = 'low';
    else if (random > 0.9) arousalStatus = 'high';
  }

  // Generate EEG data based on arousal status and intensity
  switch (arousalStatus) {
    case 'low':
      alpha = 5 + Math.random() * 5;
      beta = 2 + Math.random() * 3 + intensity * 0.2;
      theta = 4 + Math.random() * 4;
      delta = 2 + Math.random() * 2;
      break;
    case 'good':
      alpha = 3 + Math.random() * 3;
      beta = 5 + Math.random() * 5 + intensity * 0.5;
      theta = 3 + Math.random() * 3;
      delta = 1 + Math.random() * 2;
      break;
    case 'high':
      alpha = 1 + Math.random() * 2;
      beta = 10 + Math.random() * 10 + intensity * 0.8;
      theta = 1 + Math.random() * 2;
      delta = 0.5 + Math.random();
      break;
  }

  return { alpha, beta, theta, delta, arousalStatus };
};

export const processEEGData = (data: EEGData): ArousalStatus => {
  const totalPower = data.alpha + data.beta + data.theta + data.delta;
  const betaRatio = data.beta / totalPower;

  if (betaRatio > 0.5) return 'high';
  if (betaRatio < 0.3) return 'low';
  return 'good';
};

export const calculateNewIntensity = (currentIntensity: number, status: ArousalStatus): number => {
  switch (status) {
    case 'low':
      return Math.min(currentIntensity + 0.5, 10);
    case 'high':
      return Math.max(currentIntensity - 1, 0);
    default:
      return currentIntensity;
  }
};

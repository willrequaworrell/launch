export type ArousalStatus = 'low' | 'good' | 'high';

export interface EEGData {
  alpha: number;
  beta: number;
  theta: number;
  delta: number;
}

export interface SessionDataPoint {
    timestamp: number;
    eegData: EEGData;
    arousalStatus: ArousalStatus;
    intensity: number;
  }
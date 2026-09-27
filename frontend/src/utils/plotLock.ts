import type { Plot } from '../types/plot';

/** 锁定样地写入被拒绝时的统一提示 */
export const PLOT_LOCKED_MESSAGE = '样地已锁定归档，请先在台账中解锁往期再操作';

export class PlotLockedError extends Error {
  constructor() {
    super(PLOT_LOCKED_MESSAGE);
    this.name = 'PlotLockedError';
  }
}

/** 样地锁定（归档）后禁止写入样木、更新层与复查比对结果；解锁后自动恢复 */
export function assertPlotWritable(plot: Plot | undefined | null): void {
  if (plot?.locked) throw new PlotLockedError();
}

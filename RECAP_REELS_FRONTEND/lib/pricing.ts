export const PLANS = {
  gold: {
    title: 'GOLD PLAN',
    prices: {
      '1week': 7999,
      '2weeks': 15999,
      '4weeks': 29999,
    },
  },
  elite: {
    title: 'ELITE PLAN',
    prices: {
      '1week': 17999,
      '2weeks': 34999,
      '4weeks': 49999,
    },
  },
  premium: {
    title: 'PREMIUM PLAN',
    prices: {
      '1week': 29000,
      '2weeks': 59000,
    },
  }
};

export type PlanKey = keyof typeof PLANS;
export type DurationKey = '1week' | '2weeks' | '4weeks';

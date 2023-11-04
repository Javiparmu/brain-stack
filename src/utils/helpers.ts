import { maxFreeCounts } from './constants';
import { PlanEnum } from './enums';
import { Point } from './interfaces';

export const createObservers = (): void => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains('visible')) {
          entry.target.classList.add('visible');
        }
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRandomItems = (list: any[], count: number): any[] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const randomItems: any[] = [];
  const totalItems = list.length;

  while (randomItems.length < count) {
    const randomIndex = Math.floor(Math.random() * totalItems);
    const randomItem = list[randomIndex];

    if (!randomItems.includes(randomItem)) {
      randomItems.push(randomItem);
    }
  }

  return randomItems;
};

export const fetchAudioUrl = async (key: string): Promise<string> => {
  const res = await fetch('/api/audio', {
    method: 'POST',
    body: JSON.stringify({ key }),
  });

  const { url } = await res.json();

  return url;
};

export const getAnimatedLinePoints = (): Point[] => {
  const points = [];
  const startX = 66,
    startY = 138,
    gap = 71;

  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      points.push({ x: startX + i * gap, y: startY + j * gap });
    }
  }

  return points;
};

export const getRandomPoint = (currentPoint: Point): Point => {
  let newPoint;
  const points = getAnimatedLinePoints();

  do {
    newPoint = points[Math.floor(Math.random() * points.length)];
  } while (newPoint === currentPoint);

  return newPoint;
};

export const getPlanId = (plan: PlanEnum): string => {
  switch (plan) {
    case 'basic':
      return process.env.STRIPE_BASIC_PLAN_ID as string;
    case 'standard':
      return process.env.STRIPE_STANDARD_PLAN_ID as string;
    case 'premium':
      return process.env.STRIPE_PREMIUM_PLAN_ID as string;
    default:
      throw new Error('Invalid plan ID');
  }
};

export const getProgressPercentage = (progress: number): number => {
  return (progress / maxFreeCounts) * 100;
};

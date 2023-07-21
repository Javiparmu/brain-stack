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

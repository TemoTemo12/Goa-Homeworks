export async function getData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('მონაცემების წაკითხვის პრობლემა');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('GET ERROR:', error);
    }
  }
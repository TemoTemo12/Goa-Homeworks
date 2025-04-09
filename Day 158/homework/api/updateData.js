export async function updateData(url, updatedObj) {
    try {
      const response = await fetch(url, {
        method: 'PATCH', // ან 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedObj),
      });
      if (!response.ok) throw new Error('განახლების შეცდომა');
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('UPDATE ERROR:', error);
    }
  }
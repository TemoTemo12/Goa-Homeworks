export async function deleteData(url) {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('წაშლის შეცდომა');
      return 'წაშლა წარმატებით შესრულდა';
    } catch (error) {
      console.error('DELETE ERROR:', error);
    }
  }
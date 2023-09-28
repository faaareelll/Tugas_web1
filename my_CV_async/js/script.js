async function fetchHTML(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Respon jaringan tidak berhasil');
      }
  
      const html = await response.text();
      document.getElementById('konten').innerHTML = html;
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil HTML:', error);
    }
  }
  
  const url = 'C:\Users\faaareell\Downloads\Programs\Modul 1 P.web\my CV async\index.html';
  fetchHTML(url);
  
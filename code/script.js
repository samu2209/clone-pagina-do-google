document.getElementById('btn-pesquisa').addEventListener('click', function() {
        const searchQuery = document.getElementById('input-pesquisa').value;
        if (searchQuery) {
            window.location.href = `https://google.com/search?q=${encodeURIComponent(searchQuery)}`;
        } else {
            alert('Por favor, insira um termo para pesquisar.');
        }
    });


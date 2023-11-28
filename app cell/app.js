// app.js

document.addEventListener("DOMContentLoaded", function () {
  const appShellContainer = document.getElementById("app");

  // Contoh data dinamis
  const dynamicContent = `
    <header>
      <h1>App Shell Header</h1>
    </header>
    <aside>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </aside>
    <main>
      <section id="home">
        <h2>Home Page</h2>
        <p>Welcome to the home page of My App!</p>
      </section>
    </main>
  `;

  // Menampilkan konten dinamis ke dalam App Shell
  appShellContainer.innerHTML = dynamicContent;
});

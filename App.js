function App() {
  const { Routes, Route } = ReactRouterDOM;

  return (
    <div className="flex flex-col min-h-screen" data-id="x7avb7fcm" data-path="App.js">
            <Navbar />
            <main className="flex-grow" data-id="rcqmxy7u3" data-path="App.js">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>);

}
function Main() {
  const { BrowserRouter } = ReactRouterDOM;
  const { StrictMode } = React;
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);

  root.render(
    <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
  );
}

Main();
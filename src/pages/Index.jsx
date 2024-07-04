import React from "react";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Financial Times</h1>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Top News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
            <h3 className="text-xl font-bold mt-4">Featured News Headline</h3>
            <p className="mt-2">Brief description of the featured news article.</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <h3 className="text-lg font-semibold mt-2">News Headline</h3>
              <p className="mt-1">Brief description of the news article.</p>
            </div>
            <div>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <h3 className="text-lg font-semibold mt-2">News Headline</h3>
              <p className="mt-1">Brief description of the news article.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Market Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold">S&P 500</h3>
            <p>Current Value: 4,500</p>
            <p>Change: +0.5%</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold">Dow Jones</h3>
            <p>Current Value: 35,000</p>
            <p>Change: +0.3%</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold">NASDAQ</h3>
            <p>Current Value: 14,000</p>
            <p>Change: +0.7%</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Opinion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold">Opinion Headline</h3>
            <p className="mt-1">Brief description of the opinion article.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Opinion Headline</h3>
            <p className="mt-1">Brief description of the opinion article.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Opinion Headline</h3>
            <p className="mt-1">Brief description of the opinion article.</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">World News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold">World News Headline</h3>
            <p className="mt-1">Brief description of the world news article.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">World News Headline</h3>
            <p className="mt-1">Brief description of the world news article.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">World News Headline</h3>
            <p className="mt-1">Brief description of the world news article.</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tech News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold">Tech News Headline</h3>
            <p className="mt-1">Brief description of the tech news article.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Tech News Headline</h3>
            <p className="mt-1">Brief description of the tech news article.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Tech News Headline</h3>
            <p className="mt-1">Brief description of the tech news article.</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Life & Arts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold">Life & Arts Headline</h3>
            <p className="mt-1">Brief description of the life & arts article.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Life & Arts Headline</h3>
            <p className="mt-1">Brief description of the life & arts article.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Life & Arts Headline</h3>
            <p className="mt-1">Brief description of the life & arts article.</p>
          </div>
        </div>
      </section>
      <footer className="mt-8 border-t pt-4">
        <div className="flex justify-between">
          <div>
            <a href="#" className="text-sm text-muted-foreground">About Us</a>
            <a href="#" className="ml-4 text-sm text-muted-foreground">Contact</a>
            <a href="#" className="ml-4 text-sm text-muted-foreground">Privacy Policy</a>
            <a href="#" className="ml-4 text-sm text-muted-foreground">Terms of Service</a>
          </div>
          <div>
            <a href="#" className="text-sm text-muted-foreground">Social Media Icons</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
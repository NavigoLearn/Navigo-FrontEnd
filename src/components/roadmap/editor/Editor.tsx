import React, { useState } from 'react';
import PageProperties from '@components/roadmap/editor/pages/PageProperties';
import Page2 from '@components/roadmap/editor/pages/Page2';

function Editor(props) {
  const [page, setPage] = useState('properties');
  function renderPage() {
    switch (page) {
      case 'properties':
        return <PageProperties />;
      case 'page2':
        return <Page2 />;
      default:
        return <PageProperties />;
    }
  }
  return (
    <div>
      <div>
        <button onClick={() => setPage('properties')}>Properties</button>
      </div>
      {renderPage()}
    </div>
  );
}

export default Editor;

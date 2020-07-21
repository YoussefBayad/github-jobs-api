import React, { useState } from 'react';
import FetchJobs from './FetchJobs';
import { Container, Pagination } from 'react-bootstrap';
import Job from './components/Job';
import PagePagination from './components/Pagination';
function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = FetchJobs(params, page);
  return (
    <Container className="my-6">
      <h1 className="my-4">Github Jobs</h1>
      <PagePagination page={page} setPage={setPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Failed reload </h1>}
      {jobs.length > 0 && jobs.map((job) => <Job key={job.id} job={job} />)}
    </Container>
  );
}

export default App;

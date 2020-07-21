import React, { useState } from 'react';
import FetchJobs from './FetchJobs';
import { Container } from 'react-bootstrap';
import Job from './components/Job';
function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = FetchJobs(params, page);
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Failed reload </h1>}
      {jobs.length > 0 && job.map((job) => <Job key={job.id} job={job} />)}
    </Container>
  );
}

export default App;

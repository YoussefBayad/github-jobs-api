import React, { useState } from 'react';
import FetchJobs from './FetchJobs';
import { Container } from 'react-bootstrap';
import Job from './components/Job';
import PagePagination from './components/Pagination';
import Spinner from './components/Spinner';
import MySearchForm from './components/SearchForm';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = FetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <Container className="my-6">
      <h1 className="my-4">Github Jobs</h1>
      <MySearchForm params={params} onParamChange={handleParamChange} />
      <PagePagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <Spinner />}
      {error && <h1>Failed reload </h1>}
      {jobs.length > 0 && jobs.map((job) => <Job key={job.id} job={job} />)}
      <PagePagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;

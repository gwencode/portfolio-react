import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Project from '../types/project';
import getToken from '../helpers/getToken';

export default function ProjectDetails() {
  const { id } = useParams();
  const admin = localStorage.getItem('user');

  if (!id) {
    return <h1>Project not found</h1>;
  }

  const [project, setProject] = useState({} as Project);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  const navigate = useNavigate();

  const handleDelete = () => {
    const token = getToken();

    fetch(`${import.meta.env.VITE_API_URL}/projects/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    navigate('/projects');
    window.location.reload();
  };

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.content}</p>
      {admin && <button onClick={handleDelete}>Delete</button>}
    </>
  );
}

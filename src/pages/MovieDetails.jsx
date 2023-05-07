import { useState, useEffect } from 'react';
import { contexFetch } from '../instruments/fetchContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
  const { movieId } = useParams();
  return <div>{movieId}</div>;
}

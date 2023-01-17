import { checkError, client } from './client';

// export async function fetchBlogs() {
//   const resp = await client.from('blogs').select('*');
//   console.log(resp);
//   return checkError(resp);
// }

// export async function fetchBlogs() {
//   return await client
//     .from('blogs')
//     .order('created_at', { foreignTable: 'authors', ascending: false });
// }

export async function fetchBlogs() {
  const resp = await client.from('blogs').select('*, authors(name)');
  console.log('resp', resp);
  return checkError(resp);
}

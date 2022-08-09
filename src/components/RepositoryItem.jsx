export const RepositoryItem = ({ repository }) => {
  return (
    <li>
      <strong>{repository?.name ?? 'Title'}</strong>
      <p>{repository?.name ?? 'Description'}</p>
      <a href={repository?.link} target="_blank">
        Acessar repositório
      </a>
    </li>
  )
}

export const addArticle = (article)  => ({
    type: 'ADD_ARTICLE',
    title: article
})

export const removeArticle = (id) => ({
  type: 'REMOVE_ARTICLE',
  id: id
})

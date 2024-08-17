export const CategoryCard = ({category}) => {
    return <div>
        <img src={category.url} loading="lazy"/>
        <h1>{category.name}</h1>
    </div>
}
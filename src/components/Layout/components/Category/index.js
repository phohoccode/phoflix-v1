import { NavLink, useLocation } from "react-router-dom"
import styles from "./Category.module.scss"
import clsx from "clsx"
import useFetch from "../../../../Hooks/useFetch"

function Category() {
    const [categorys] = useFetch('https://phimapi.com/the-loai')
    const { pathname} = useLocation()

    return ( 
        <ul className={clsx(styles.category)}>
            {categorys && categorys.map((category, index) => (
                <li 
                    className={pathname === `/PHOFLIX/detail/the-loai/${category.slug}` ? 
                        clsx(styles.active) : ''}
                    key={index}>
                    <NavLink to={`/PHOFLIX/detail/the-loai/${category.slug}`}>
                        {category.name}
                    </NavLink>
                </li>
            ))}
        </ul>
     )
}

export default Category
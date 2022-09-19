import styles from '../styles/Navbar.module.css'
export default function Header(){
	return(
		<nav className={styles.Nav}>
			<img className={styles.Logo} src="/images/logo.svg" />

			<div className={styles.NavMenu}>
				<a>
					<img src="/images/home-icon.svg" />
					<span>HOME</span>
				</a>

				<a>
					<img src="/images/search-icon.svg" />
					<span>SEARCH</span>
				</a>

				<a>
					<img src="/images/watchlist-icon.svg" />
					<span>WATCHLIST</span>
				</a>

				<a>
					<img src="/images/original-icon.svg" />
					<span>ORGINALS</span>
				</a>

				<a>
					<img src="/images/movie-icon.svg" />
					<span>MOVIE</span>
				</a>

				<a>
					<img src="/images/series-icon.svg" />
					<span>SERIES</span>
				</a>
			</div>

			<img className={styles.UserImg} src="/images/yafet.jpg" />
		</nav>
	)
}
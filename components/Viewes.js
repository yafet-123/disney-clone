import styles from '../styles/Viewes.module.css'
function Viewes(){

	return(
			<div className={styles.Container}>
				<div className={styles.Wrap}>
					<img src="/images/viewers-disney.png"/>
				</div>

				<div className={styles.Wrap}>
					<img src="images/viewers-marvel.png"/>
				</div>

				<div className={styles.Wrap}>
					<img src="images/viewers-national.png"/>
				</div>

				<div className={styles.Wrap}>
					<img src="images/viewers-pixar.png"/>
				</div>

				<div className={styles.Wrap}>
					<img src="images/viewers-starwars.png"/>
				</div>

			</div>
		
	)
}

export default Viewes
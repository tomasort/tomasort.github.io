import './index.scss'

const AnimatedLetters = ({letterClass, strArray, idx}) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={ char + i} className={['letter', `${letterClass} _${i + idx}`].join(' ')}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters
import resetButton from './assets/ic-reset.svg';
function ResetButton({ className='', onClick }) {
    return <img className={className} onClick={onClick} src={resetButton} alt="초기화버튼" />;
}

export default ResetButton;
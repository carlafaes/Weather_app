import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

export default function SpinnerAsLoading(){
    return(
        <>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
        </>
    )
}
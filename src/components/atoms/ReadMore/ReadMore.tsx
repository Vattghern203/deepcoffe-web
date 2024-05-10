import { ChevronRightIcon } from "../Icons/ChevronRightIcon"


interface ReadMoreProps {

  text?: string
}

function ReadMore({ text }:ReadMoreProps) {

    return (

        <a
          className="font-semibold inline-flex items-center space-x-2"
          href="#"
        >
              <span>{text || 'Read more'}</span>
              <ChevronRightIcon className="w-4 h-4" />
        </a>
    )
}

export default ReadMore
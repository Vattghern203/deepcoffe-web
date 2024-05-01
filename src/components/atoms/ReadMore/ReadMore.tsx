import { ChevronRightIcon } from "../Icons/ChevronRightIcon"

export function ReadMore() {

    return (

        <a
          className="font-semibold inline-flex items-center  space-x-2"
          href="#"
        >
              <span>Read more</span>
              <ChevronRightIcon className="w-4 h-4" />
        </a>
    )
}
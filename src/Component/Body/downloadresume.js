import { Fragment } from 'react'
import {

  LinkIcon,
 
} from '@heroicons/react/20/solid'


function Downloadresume() {
    const handleDownload = () => {
        const url = "/ImageandVids/KarthikVanabhojana.pdf";
        fetch(url)
          .then((response) => response.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "KarthikVanabhojana.pdf");
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
          });
      };
    
  return (
    <div className="flex justify-center py-10">
    <span className="ml-3 hidden sm:block ">
      <button
        type="button"
        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={handleDownload}>
        <LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
        Download Resume
      </button>
    </span>
  </div>

  )
}

export default Downloadresume
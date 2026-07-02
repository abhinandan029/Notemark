import ReactMarkdown from "react-markdown"

import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import remarkEmoji from "remark-emoji"
import remarkToc from "remark-toc"
 
import rehypeKatex from "rehype-katex"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import "katex/dist/katex.min.css"
import "highlight.js/styles/github.css"

import html2pdf from 'html2pdf.js'

import {useRef, useEffect} from 'react'

import '../styles/Preview.css'
import {FaEye, FaFilePdf} from 'react-icons/fa'

function Preview({body, title}){

  const previewRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const area = previewRef.current;
    if(!area) return ;

    const isAtBottom = area.scrollHeight - area.scrollTop - area.clientHeight < 200 ;

    if(isAtBottom){
      scrollRef.current?.scrollIntoView({behavior : "smooth"});
    }


  }, [body]);


  function exportPDF(){

    const element = previewRef.current;

    element.scrollTop = 0;

    element.style.backgroundColor = "hsl(0, 0%, 100%)";
    element.style.color = "hsl(0, 0%, 0%)";

    html2pdf().set({
      margin : 10,
      filename : `${title || "untitled"}.pdf`,
      htmal2canvas : {scale : 2, useCORS : true, scrollX : 0, scrollY : 0, logging : false, windowHeight : element.scrollHeight, height : element.scrollHeight},
      jsPDF : {unit : "mm", format : "a4", orientation : "portrait"},
      pagebreak: { mode: 'css', avoid: ['h1','h2','h3','p','table', 'tr', 'img', 'pre','blockquote']}
    })
    .from(element)
    .save()
    .then( () => {
      element.style.backgroundColor = "";
      element.style.color = "";
    });
  }

  return (
    <div className="Preview">
      
      <div id="preview_topbar">
        <FaEye /><p>Preview</p>
        <FaFilePdf id="export_pdf" title="Export as PDF file" onClick={exportPDF}/>
      </div>
      <div id="preview_area" ref={previewRef}>
        <ReactMarkdown 
          remarkPlugins={[remarkGfm, remarkMath,remarkEmoji,remarkToc]} 
          rehypePlugins={[rehypeKatex,rehypeHighlight,rehypeSlug]}>
          
          {body}

        </ReactMarkdown>
        <div ref={scrollRef}></div>
      </div>

    </div>
    
  );

}

export default Preview
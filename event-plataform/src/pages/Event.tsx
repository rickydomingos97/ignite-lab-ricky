import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full mx-auto">
      <Header />
      <main className="w-h-full flex flex-1">
        {slug 
        ? <Video lessonSlug={slug} /> 
        : <div className="flex-1 w-[1100px] bg-gray-700"/>
        }
        <Sidebar />
      </main>
    </div>
  );
}

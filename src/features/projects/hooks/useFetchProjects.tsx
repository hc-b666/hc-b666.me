import { useEffect, useState } from "react";
import { Project } from "../types";
import { PROJECTS_URL } from "@/common/constants";

export default function useFetchProjects() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      try {
        const res: Project[] = await fetch(PROJECTS_URL).then((res) =>
          res.json()
        );
        setProjects(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { loading, projects };
}

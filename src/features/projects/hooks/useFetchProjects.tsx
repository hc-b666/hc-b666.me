import { useEffect, useState } from "react";
import { Project } from "../types";
import { PROJECTS_URL } from "@/common/constants";

export default function useFetchProjects() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    function fetchProjects() {
      setLoading(true);
      try {
        const res = fetch(PROJECTS_URL).then((res) => res.json());
        console.log(res);
        setProjects([]);
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

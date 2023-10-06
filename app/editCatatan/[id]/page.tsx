import EditCatatanForm from "@/components/EditCatatanForm";

const getCatatanById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/catatan/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Gagal mengambil data catatan");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditCatatan({ params }: any) {
  const { id }: any = params;
  const { catatan }: any = await getCatatanById(id);
  const { title, description }: any = catatan;

  return <EditCatatanForm id={id} title={title} description={description} />;
}

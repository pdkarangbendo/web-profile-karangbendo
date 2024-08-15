import Card from '@/components/cards/Card';
import { IconPlus, IconCircleXFilled } from '@tabler/icons-react';

export default function DokumentasiKegiatan() {
  return (
    <Card>
      <div className="flex justify-between items-center mb-3">
        <p className="font-bold">Dokumentasi Kegiatan</p>
        <button
          type="button"
          className="w-max px-3 py-2 bg-primary rounded-md cursor-pointer text-white text-sm font-medium gap-2 flex justify-center items-center"
        >
          <IconPlus color="#fff" size={18} />
          <p>Tambah Data</p>
        </button>
      </div>
      <div className="flex gap-5">
        <div className="relative w-max">
          <img
            src="https://images.unsplash.com/photo-1477951233099-d2c5fbd878ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGlnaHdheXxlbnwwfHwwfHx8MA%3D%3D"
            className="rounded-md bg-cover"
            width={215}
            height={120}
            alt="Highways"
          />
          <span className="inline-block absolute -top-2 -right-2 cursor-pointer bg-white w-max rounded-full">
            <IconCircleXFilled className="text-rose-600" />
          </span>
        </div>
        <div className="relative w-max">
          <img
            src="https://images.unsplash.com/photo-1477951233099-d2c5fbd878ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGlnaHdheXxlbnwwfHwwfHx8MA%3D%3D"
            className="rounded-md bg-cover"
            width={215}
            height={120}
            alt="Highways"
          />
          <span className="inline-block absolute -top-2 -right-2 cursor-pointer bg-white w-max rounded-full">
            <IconCircleXFilled className="text-rose-600" />
          </span>
        </div>
      </div>
    </Card>
  );
}

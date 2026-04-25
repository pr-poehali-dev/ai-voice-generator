import { useState } from "react";

export default function BookingForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "2" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-neutral-900 py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-400 mb-4">Бронирование</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
          Заказать стол
        </h2>

        {sent ? (
          <div className="text-white text-xl py-12 text-center">
            Заявка принята! Мы свяжемся с вами для подтверждения.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-neutral-400 text-sm uppercase tracking-wide">Ваше имя</label>
              <input
                required
                type="text"
                placeholder="Иван Иванов"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-transparent border-b border-neutral-600 text-white py-3 outline-none placeholder:text-neutral-600 focus:border-white transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-neutral-400 text-sm uppercase tracking-wide">Телефон</label>
              <input
                required
                type="tel"
                placeholder="+7 (999) 000-00-00"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-transparent border-b border-neutral-600 text-white py-3 outline-none placeholder:text-neutral-600 focus:border-white transition-colors"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-neutral-400 text-sm uppercase tracking-wide">Дата</label>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="bg-transparent border-b border-neutral-600 text-white py-3 outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-neutral-400 text-sm uppercase tracking-wide">Гостей</label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="bg-neutral-900 border-b border-neutral-600 text-white py-3 outline-none focus:border-white transition-colors cursor-pointer"
                >
                  {[1,2,3,4,5,6,7,8].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 bg-white text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-300 cursor-pointer w-fit"
            >
              Забронировать
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

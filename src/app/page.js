import Link from 'next/link'

export default function Home() {
  return (
    <>
    <center>
      <h1>ยินดีต้อนรับร้านเจ๊แหม่ม</h1>
    </center>

    <br></br>
    <center>
      <Link href="/">หน้าหลัก</Link> |
      <Link href="/about">เกี่ยวกับเรา</Link> |
      <Link href="/service">บริการของเรา</Link> |
      <Link href="/contact">ติดต่อเรา</Link> |
    </center>
    </>
  )
}
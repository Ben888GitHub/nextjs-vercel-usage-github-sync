import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main
			className={`flex  flex-col items-center justify-between p-16 ${inter.className}`}
		>
			<p className="text-5xl">
				Sync GitHub Repo with NextJS App to Vercel with 1 command
			</p>
			<p className="text-2xl">
				{
					'gh repo create <your-repo-name>  --public --clone && cd <your-repo-name> && git branch -m main && npx create-next-app@latest .  && vercel git connect'
				}
			</p>
		</main>
	);
}

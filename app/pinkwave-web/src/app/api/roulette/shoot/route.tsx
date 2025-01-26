import { NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../../config';
import { getFrameHtmlResponse } from '../../../../utils/getFrameHtmlResponse';

async function getResponse(): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: 'Mini Building',
          action: 'post',
          target: `${NEXT_PUBLIC_URL}/api/roulette/shoot2`
        },
        {
          label: 'Main Building',
          action: 'post',
          target: `${NEXT_PUBLIC_URL}/api/roulette/shoot3`
        },
        {
          label: '< back',
          action: 'post',
          target: `${NEXT_PUBLIC_URL}/api/roulette/roulette`
        },
      ],
      image: {
        aspectRatio: '1:1',
        src: `${NEXT_PUBLIC_URL}/roulette/page2.png`,
      },
    }),
  );
}

export async function POST(): Promise<Response> {
  return getResponse();
}

export const dynamic = 'force-dynamic';
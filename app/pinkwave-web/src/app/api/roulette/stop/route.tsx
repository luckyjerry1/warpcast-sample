import { NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../../config';
import { getFrameHtmlResponse } from '../../../../utils/getFrameHtmlResponse';

async function getResponse(): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: 'Builder grants',
          action: 'post',
          target: `${NEXT_PUBLIC_URL}/api/roulette/stop2`
        },
        {
          label: 'Tipper grants',
          action: 'post',
          target: `${NEXT_PUBLIC_URL}/api/roulette/stop3`
        },
        {
          label: '< back',
          action: 'post',
          target: `${NEXT_PUBLIC_URL}/api/roulette/shoot`
        }
      ],
      image: {
        aspectRatio: '1:1',
        src: `${NEXT_PUBLIC_URL}/roulette/page5.png`,
      },
    }),
  );
}

export async function POST(): Promise<Response> {
  return getResponse();
}

export const dynamic = 'force-dynamic';
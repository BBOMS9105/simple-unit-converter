import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Search } from 'lucide-react'

export default function CategoryNotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6">
          <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">
            카테고리를 찾을 수 없습니다
          </h1>
          <p className="text-muted-foreground">
            요청하신 변환 카테고리가 존재하지 않습니다.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              홈으로 돌아가기
            </Link>
          </Button>
          
          <div className="text-sm text-muted-foreground">
            <p>사용 가능한 카테고리:</p>
            <div className="mt-2 flex flex-wrap gap-2 justify-center">
              {['길이', '무게', '부피', '온도', '시간', '데이터', '속도', '면적', '압력', '에너지'].map((category) => (
                <span key={category} className="px-2 py-1 bg-muted rounded text-xs">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
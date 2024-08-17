import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ProductReviewCard({ review }) {
    return <div className="flex gap-2">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt={review.reviewerName} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
            <div className="leading-5">
                <h2 className="font-semibold">{review.reviewerName}</h2>
                <p className="text-slate-500 text-sm">{review.reviewerEmail}</p>
            </div>
            <p>{review.comment}</p>
        </div>
    </div>
}
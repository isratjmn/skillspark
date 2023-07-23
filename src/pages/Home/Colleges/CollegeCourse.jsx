import { RiCalendarEventLine } from "react-icons/ri";
import { MdSportsKabaddi } from "react-icons/md";
import { ImBlog } from "react-icons/im";
import { BiSolidBookOpen } from "react-icons/bi";

const CollegeCourse = ({
	images,
	title,
	sports,
	events,
	admissionDates,
	researchHistory,
}) => {
	return (
		<>
			<div className="p-[14px] h-[530px] shadow-lg min-w-[25rem] bg-[#a1d7d0bc] rounded-md">
				<img src={images} className="h-64" alt="images" />
				<div className="text-[27px] text-blueish my-4 font-bold">
					{title}
				</div>
				<div>
					<div className="flex items-center mb-3 gap-2">
						<ImBlog className="text-purple text-xl" />
						<div className="font-bold">Admission Open:</div>
						<div className="font-semibold">{admissionDates}</div>
					</div>
					<div className="flex items-center gap-2 mb-2">
						<BiSolidBookOpen className="text-purple text-xl" />
						<div className="font-bold">Research Excellence:</div>
						<div className="font-semibold">{researchHistory}</div>
					</div>
				</div>
				<div>
					<div className="flex items-center mb-3 gap-2">
						<RiCalendarEventLine className="text-purple text-2xl" />
						<div className="font-bold">
							Upcoming Events:
							<span className="font-semibold"> {events}</span>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<MdSportsKabaddi className="text-purple text-xl" />
						<div className="font-bold">
							Sports:
							<span className="font-semibold"> {sports}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CollegeCourse;

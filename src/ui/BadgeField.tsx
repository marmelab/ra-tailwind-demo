import { useRecordContext } from "ra-core";
import get from "lodash/get";

export const BadgeField = ({ source }: { source: string }) => {
	const record = useRecordContext();
    const value = get(record, source);
	return <div className="badge badge-primary">{value}</div>;
};

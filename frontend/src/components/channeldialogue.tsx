import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useUser } from "@/lib/AuthContext";
import axiosInstance from "@/lib/axiousInstance";

interface ChanneldialogueProps {
  isopen: boolean;
  onclose: () => void;
  mode: "create" | "edit";
  existingData?: {
    channelname?: string;
    description?: string;
  };
}

const Channeldialogue: React.FC<ChanneldialogueProps> = ({
  isopen,
  onclose,
  mode,
  existingData,
}) => {
  const { user, login } = useUser();
  const [channelName, setChannelName] = useState(
    existingData?.channelname || ""
  );
  const [description, setDescription] = useState(
    existingData?.description || ""
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!channelName.trim()) return;

    setIsLoading(true);
    try {
      const response = await axiosInstance.patch(`/user/${user?._id}`, {
        channelname: channelName.trim(),
        description: description.trim(),
      });

      // Update user context with new channel data
      login(response.data.result);
      onclose();
      setChannelName("");
      setDescription("");
    } catch (error) {
      console.error("Error creating/updating channel:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isopen} onOpenChange={onclose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Create Channel" : "Edit Channel"}
          </DialogTitle>
          <DialogDescription>
            {mode === "create"
              ? "Create your channel to start uploading videos and building your audience."
              : "Update your channel information."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="channelname">Channel Name</Label>
            <Input
              id="channelname"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              placeholder="Enter channel name"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your channel"
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onclose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading || !channelName.trim()}>
              {isLoading
                ? "Saving..."
                : mode === "create"
                ? "Create Channel"
                : "Update Channel"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Channeldialogue;